#/bin/bash
# This script will rename the theme from stanford_starter to your custom theme name.

function renameFilesRecursively () {
  SEARCH="$1"
  REPLACE="$2"

  find ./ -type f -name "*${SEARCH}*" | while read FILENAME ; do
      NEW_FILENAME="$(echo ${FILENAME} | sed -e "s/${SEARCH}/${REPLACE}/g")";
      mv "${FILENAME}" "${NEW_FILENAME}";
  done
}

read -p 'New theme name: ' NEW_NAME

REGEX='^[[:upper:]]-([0-9]{2}|[0-9]{3})-([0-9]{2}|[0-9]{3})$'

if [ -z "$NEW_NAME" ]
then
    echo 'Inputs cannot be blank please try again'
    exit 0
fi

# Check if the input is only letters.

if ! [[ "$NEW_NAME" =~ ^[a-z0-9_]+$ ]]
then
    echo "Invalid theme name."
    exit 0
fi

find . -type f -not -path "./.git/*" -not -path "./node_modules/*" -exec sed -i "s/stanford_starter/$NEW_NAME/g" {} + &&

renameFilesRecursively "stanford_starter" $NEW_NAME;

rm ./rename_theme.sh

