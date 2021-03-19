const ga = window.ga
Object.freeze(ga)
delete window.ga
Object.defineProperty(window, 'ga', { value: ga })
