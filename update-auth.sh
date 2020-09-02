#!/bin/bash

sed -i '' -e 's/AUTH-TOKEN/'"$AUTHTOKEN"'/g' .dsmrc
