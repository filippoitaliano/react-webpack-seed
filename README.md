# react-webpack-seed

Super minimal 2021 React + Webpack seed project with client-side routing.

## Features

- Basic development and building support.
- Basic React.js support.
- Basic "Babel" js support.
- Basic CSS support.
- Basic client-side routing support.
- Basic configuration files already "ejected" for further customizations.

## Dependencies handling

As you can see there isn't a lock file committed to git. I've recently migrated to yarn v2 some very small projects and it worked fine. Yarn v2 does actually twist some ideas behind the classic node dependencies management. Today I migrated also this scaffold but than I realized that Yarn v2 removes some layers of abstraction about dependencies. It makes you having deps cache and other technical details and configurations directly committed to the repo. This level of dependecies control isn't exactly what I had in mind for a straight-forward minimal seed. Anyway I've tested the deps locally with Yarn v2, Yarn v1 and npm. You can use what you prefer.