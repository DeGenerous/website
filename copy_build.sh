#!/usr/bin/env sh


echo "Creating container"
id=$(podman create $1)

echo "Copying files"
podman cp $id:$2 $3

echo "Removing container"
podman rm -v $id
