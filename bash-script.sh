# Write your commands here

# Use the environment variables input below to pass secret variables to this script

echo $(pwd)

echo $(ls -al)

echo "HEROKU_API_KEY: $HEROKU_API_KEY"

git log -1


#ACTUAL CODE:
# git push -f https://heroku:$HEROKU_API_KEY@git.heroku.com/uxilab.git master
