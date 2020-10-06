#! /bin/sh
PATH=$PATH:~/usr/local/bin
PATH=$PATH:/usr/local/bin

npm test
RETVAL=$?

if [ $RETVAL -ne 0 ]; then
 exit 1
fi