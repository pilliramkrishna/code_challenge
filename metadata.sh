#!/bin/bash

echo "Please enter metadata input key"
read data_key
data_value=`wget -q -O - http://169.254.169.254/latest/meta-data/$data_key`
printf '{"%s":"%s"}\n' "$data_key" "$data_value"
