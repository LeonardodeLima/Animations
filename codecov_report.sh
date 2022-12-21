#!/bin/bash
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "Coverage results branch $branch"
bash <(curl -s https://codecov.io/bash)