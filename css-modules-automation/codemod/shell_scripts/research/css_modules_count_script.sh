#bin/zsh
find /Users/sergeyro/Development/monday-ui-react-core/src/components -type f -name "*.scss" -a ! -name "*.module.scss" -a ! -name "*.stories.scss" -exec basename {} \; | sort