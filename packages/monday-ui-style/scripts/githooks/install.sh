#! /bin/sh
PATH=$PATH:~/usr/local/bin
PATH=$PATH:/usr/local/bin

# Installing the pre push symlink
ln -s ../../scripts/githooks/pre-push.sh .git/hooks/pre-push
chmod +x .git/hooks/pre-push

echo '[monday-node-infra] Git pre-push hook installed!'
