# Vibe Design System

![image](https://user-images.githubusercontent.com/60314759/147566893-63c5209a-8b83-4f32-af61-8b4c350ec770.png)

This is a monorepo containing Vibe's maintained open-source packages.

The packages are maintained using [lerna](https://github.com/lerna/lerna/tree/master/).

## CI

When pushing changes to the remote, lerna runs tests on all packages.
The CI will bump patch version of changed packages only, and only when the build is merge-to-master branch.

## FAQ

### Why does the CI for my PR run on all the packages?

The CI looks for changes using git tags. If your branch is out of sync with the master branch,
you may have missing git tags on your branch, causing Lerna to "think" there are many new changes.
To solve this, make sure you pull the tags from `master` branch. Two of your options are:

1. Pull from master including tags: `git checkout <my_branch> && git pull origin master --tags`
2. Update master branch and rebasing your branch on it: `git checkout master && git pull && git checkout <my_branch> && git rebase master`