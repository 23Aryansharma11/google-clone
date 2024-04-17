### Google Clone
## Checklist

[X] Add home-header

[ ] Add body

[ ] Add footer

[ ] Add search pages ( for web and image)

[ ] Search Header component

[ ] Data fetching

[ ] Handling errors

[ ] Search components

[ ] Pagination

[ ] Loading effect and skeleton

[ ] Deploy


## Folder structure
    root
    |- src 
        |- App = page.jsx, layout.jsx
            |- Search = page.jsx, global.css, error.jsx, layout.jsx
                |- Image = page.jsx, loading.jsx
                |- Web = page.jsx, loading.jsx
        |- Components = Header, Footer, Search Header, etc
    |- public = Images, favicons etc
    |- config.json

## Config
```@/*: ["./src/*"] ```

```C/*:  ["./src/components/*"]```

### Images attribute


    Google Image: <a href="https://iconscout.com/icons/google" class="text-underline font-size-sm" target="_blank">Google</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a>