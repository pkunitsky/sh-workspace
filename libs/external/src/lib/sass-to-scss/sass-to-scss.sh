# install ruby https://rubyinstaller.org/downloads/
# gem install sass

# create scss files
sass-convert --recursive ./src --from sass --to scss

# remove .sass files
find ./src -type f -name "*.sass" -delete

# replace .sass with .scss for imports
find ./src -type f \( -iname \*.ts -o -iname \*.scss \) -print0 | xargs -0 sed -i "s/.sass/.scss/g"
