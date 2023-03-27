# Planen er at lade MD filer i Github være styrende, så vi kan se historik osv.

Vi ønsker dog stadig at kunne tilgå data igennem et API med database.

Så derfor parser vi md filerne, og smider dem på database form.

Vi hoster databasen i vores Azure miljø, det er bare nemmere - Vi har allerede setuppet til det

Men parseren kan leve i Github actions.
