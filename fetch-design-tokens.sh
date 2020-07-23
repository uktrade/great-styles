#!/bin/sh
DSM_URL="https://trade.invisionapp.com/dsm-export/department-for-international-trade/great"
DSM_TOKENS_KEY="BJ_zhhVOI"

# Fetching CSS variables
echo Fetching "$DSM_URL/_style-params.scss?key=******"
curl "$DSM_URL/_style-params.scss?key=$DSM_TOKENS_KEY" -o src/_design-tokens.scss
echo 'CSS variables in src/_design-tokens.scss has been updated\r\n\r\n'
