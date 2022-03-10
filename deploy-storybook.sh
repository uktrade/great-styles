npm run storybook:build
cp manifest_storybook.yml storybook-static/manifest.yml
cd storybook-static && cf push great-styles-staging
