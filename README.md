# \<sp-slider-bug>

sp-slider component doesn't work properly unless we import the bundle version from CDN

## How
To reproduce the issue, just install the package deps:

```bash
npm i
```

Run the WC app

```
npm run start
```

open these URLs :

http://localhost:8000/demo/

http://localhost:8000/demo/bundle-version.html

We can see the first link doesn't work as expected whereas the second link works nicely

## CASE SOLVED

Leveraging scale="large" color="dark" in the configuration, it needs the theme fragments to power that:

```
// Power a site using <sp-theme color="dark" scale="large">
import '@spectrum-web-components/theme/theme-dark.js';
import '@spectrum-web-components/theme/scale-large.js';

import '@spectrum-web-components/theme/sp-theme.js';
```

Thanks to Westbrook for the answer