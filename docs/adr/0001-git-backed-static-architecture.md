# Git-Backed Static Architecture with Browser Staging

We need to store song library and event data for an app hosted on GitHub Pages without paying for or maintaining dedicated backend infrastructure. We decided to store canonical Songs and Events as flat text/JSON files within the Git repository, compile them into an indexed static asset at build time, and support client-side localStorage for offline gig use and draft staging with JSON export. This maximizes version control, reliability, portability, and zero-cost hosting.
