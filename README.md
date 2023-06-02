# [Stanford Starter](https://github.com/SU-SWS/stanford_starter)
##### Version: 8.x-1.0-dev

Changelog: [Changelog.txt](CHANGELOG.txt)

Description
---

Stanford Starter is a Stanford sub-theme that works with the Stanford Basic theme.

Documentation
---
See subtheming guides and best practices here: 
https://devguide.sites.stanford.edu/front-end/drupal/sub-themes 

Installation
---
1. Review the documentation link above for best practices, particularly the Do's and Don't's sections.
2. Fork or download this theme repository. 
3. Change all theme file names from including "stanford_starter" to including the machine name of your theme.
4. Run a search and replace throughout the theme files to replace "stanford_starter" with the machine name of your theme.
5. Add any specific brand colors you need (in addition to the decanter colors that are already available) to src/scss/utilities/variables/_colors.scss. 
See all the colors already available through decanter: https://decanter.stanford.edu/page/brand-design-elements-color/ 
6. If desired, add font settings if you need to override and use fonts other than decanter fonts ( https://decanter.stanford.edu/page/brand-design-elements-typography/ ) [link],
by defining a font library in the themename.libraries.yml file.
7. If desired, add button mixins in src/scss/utilities/mixins/_buttons.scss with your button styles and then reference them and use them in src/scss/theme/_button.scss.
8. If desired, add cta and link mixins in src/scss/utilities/mixins/_cta.scss with your button styles and then reference them and use them in src/scss/theme/_cta.scss.
9. If you want to skin or theme a component, like a paragraph, create a _mycomponent.scss file in src/scss/components folder. Consider using a subfolder like 'cards' or 'banners' if applicable.

Configuration
---

Nothing special needed. Install, enable, and set as the default active theme.

Developer
---

If you wish to develop on this theme you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this theme. To install:

```
npm install
```
After you've made a change you want to see processed, you can run:
```
npm run build/yarn build
```
This will process scss, js, and asset files, preparing them from the src directory to the dist directory.

```
npm run watch/yarn watch
```
This will watch the scss files and compile them upon saving.

GitPod
---
1. Add your ssh key to [GitPod](https://gitpod.io/variables)
   1. It is recommended to have a password-less ssh key for simplicity.
      1. `ssh-keygen -b 4096`, press enter when asked for the password
      2. Add this ssh public key to the necessary services: Acquia, Github, etc.
   2. Get the base64 string of your ssh key files
      1. `cat id_rsa | base64` for the private key
      2. `cat id_rsa.pub | base64` for the public key.
   3. In GitPod, add the variable named `SSH_PRIVATE_KEY` with the private key
   4. In GitPod, add the variable named `SSH_PUBLIC_KEY` with the public key
   5. In Gitpod, add the variable named `GITCONFIG` with the base64 of your git config: `cat ~/.gitconfig | base64`
2. Recommended, but not required:
   1. install the GitPod browser plugin
   2. Configure your browser settings for an easier experience: https://www.gitpod.io/docs/configure/browser-settings
3. Open a gitpod workspace with [these instructions](https://www.gitpod.io/docs/getting-started#start-your-first-workspace)


Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this theme. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
