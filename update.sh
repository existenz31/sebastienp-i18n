#!/bin/sh
EMAIL=sebastienp@forestadmin.com
DUMMY_NAME=dummy007
set -o allexport
. ./.env
set +o allexport
DIR=`pwd`
pushd .
cd ..
rm -rf $DUMMY_NAME
echo $DATABASE_URL
lumber generate $DUMMY_NAME --email $EMAIL --connection-url $DATABASE_URL --schema $DATABASE_SCHEMA --ssl $DATABASE_SSL --application-host localhost --application-port $APPLICATION_PORT
cp -r $DUMMY_NAME/models/ $DIR/models/
