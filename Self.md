Sometimes the build might fail in netlify. My recent build of bachelor's thesis had a weird css issue.
Build it locally and then upload it.
-g website will get triggered through github builds (when a PR is raised from any other branch and when any branch is merged into the main branch).
The main one will only take effect if new public directory is uploaded.

Development testing - npm run dev
Generating and testing production build (public directory) - npm run prod
Production build - npm run build
