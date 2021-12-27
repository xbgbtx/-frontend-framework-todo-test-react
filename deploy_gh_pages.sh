#!/bin/bash

BUILD_CMD="npm run build"
BUILD_DIR="$PWD/build"

GH_PAGES_BRANCH="gh-pages"

if [ ! -d "$BUILD_DIR" ]; then
   mkdir "$BUILD_DIR"
fi

echo "Building to $BUILD_DIR"

if [[ $(git status -s) ]]; then
   echo "The working directory is dirty. Please commit any pending changes."
   exit 1;
fi

echo "Deleting old publication"
rm -rf "$BUILD_DIR"
mkdir "$BUILD_DIR"
git worktree prune
rm -rf ".git/worktrees/$BUILD_DIR/"

echo "Checking out gh-pages branch into \"$BUILD_DIR\""
git worktree add -b $BUILD_DIR $GH_PAGES_BRANCH

echo "Removing existing files"
rm -rf "$BUILD_DIR"/*

echo "Copying project submodules"
rsync -av --exclude='*.git*' project_submodules/ "$BUILD_DIR"

echo "Running Build"
$BUILD_CMD

echo "Updating gh-pages branch"
cd "$BUILD_DIR" && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

git push origin $GH_PAGES_BRANCH

