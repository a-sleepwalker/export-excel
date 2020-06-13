#!/bin/bash

while getopts ":v:b:p:" opt; do
  case $opt in
  v)
    version=$OPTARG
    ;;
  b)
    branch=$OPTARG
    ;;
  p)
    prefix=$OPTARG || ""
    ;;
  ?)
    exit 1
    ;;
  esac
done
#通过shift $(($OPTIND - 1))的处理，$*中就只保留了除去选项内容的参数，
#可以在后面的shell程序中进行处理
shift $(($OPTIND - 1))

echo "pull origin $branch."

git pull origin "$branch"

if [ ! "$version" ]; then
  exit 1
fi

standard-version -r "$version" --tag-prefix "$prefix"

#git push --follow-tags origin "$branch"

echo "git push origin $branch"

echo "release finished."
