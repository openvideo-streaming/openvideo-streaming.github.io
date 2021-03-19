const ga = window.ga
delete window.ga
Object.defineProperty(window, 'ga', { value: ga })
