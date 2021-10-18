echo $(npm view monday-ui-react-core version)
echo $(node -e "console.log(require('./package.json').version)")

[[ $(npm view monday-ui-react-core version) = $(node -e "console.log(require('./package.json').version)") ]] && echo "yesy" && echo "123" || echo "/no"