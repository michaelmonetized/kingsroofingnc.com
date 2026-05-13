# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 3793 |
| Avg Cyclomatic | 1.7 |
| P90 Cyclomatic | 4 |
| Dead Files | 9.3% |
| Dead Exports | 4.2% |
| Maintainability (avg) | 93.2 |
| Circular Deps | 0 |
| Unused Deps | 0 |

## Fallow: 7 high complexity functions

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `src/app/contact/feedback/rate/star-rating.tsx:7` | `StarRating` | critical | 11 | 9 | 132.0 **!** | 74 |
| `src/app/actions/contact.ts:13` | `submitContact` | critical | 10 | 7 | 110.0 **!** | 86 |
| `src/components/QuoteForm.tsx:11` | `QuoteForm` | high | 8 | 9 | 72.0 **!** | 92 |
| `src/app/actions.ts:17` | `submitQuoteForm` | high | 7 | 4 | 56.0 **!** | 41 |
| `src/components/ContactForm.tsx:7` | `ContactForm` | moderate | 6 | 3 | 42.0 **!** | 131 |
| `src/components/HeroContactForm.tsx:7` | `HeroContactForm` | moderate | 6 | 3 | 42.0 **!** | 76 |
| `src/components/Header.tsx:110` | `<arrow>` | moderate | 5 | 6 | 30.0 **!** | 45 |

**43** files, **89** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT


Audit scope: 6 changed files vs main (799adfd..HEAD)
✓ No issues in 6 changed files (0.28s)


## DEAD

## Fallow: 7 issues found

### Unused files (4)

- `src/app/actions.ts`
- `src/components/HeroContactForm.tsx`
- `src/components/QuoteForm.tsx`
- `src/components/contact-cta.tsx`

### Unused exports (3)

- `src/app/actions.ts`
  - :17 `submitQuoteForm`
- `src/lib/constants.ts`
  - :56 `MATERIALS`
  - :160 `LOCATION_PAGES`




## DUPLICATION

note: hid 6 clone groups below minOccurrences=3 (lower --min-occurrences to see them)
## Fallow: 9 clone groups found (28.6% duplication)

### Duplicates

**Clone group 1** (25 lines, 6 instances)

- `src/app/about/page.tsx:43-67`
- `src/app/boxed-eave-style-metal-carport/page.tsx:88-109`
- `src/app/metal-structures/page.tsx:55-79`
- `src/app/pole-truss-enclosed-kits/page.tsx:88-109`
- `src/app/pole-truss-stand-roof-kit/page.tsx:88-109`
- `src/app/regular-style-metal-carports/page.tsx:90-111`

**Clone group 2** (80 lines, 4 instances)

- `src/app/boxed-eave-style-metal-carport/page.tsx:30-109`
- `src/app/pole-truss-enclosed-kits/page.tsx:30-109`
- `src/app/pole-truss-stand-roof-kit/page.tsx:30-109`
- `src/app/vertical-roof-style-metal-carport/page.tsx:30-109`

**Clone group 3** (54 lines, 5 instances)

- `src/app/boxed-eave-style-metal-carport/page.tsx:40-93`
- `src/app/pole-truss-enclosed-kits/page.tsx:40-93`
- `src/app/pole-truss-stand-roof-kit/page.tsx:40-93`
- `src/app/regular-style-metal-carports/page.tsx:29-82`
- `src/app/vertical-roof-style-metal-carport/page.tsx:40-93`

**Clone group 4** (27 lines, 6 instances)

- `src/app/boxed-eave-style-metal-carport/page.tsx:46-63`
- `src/app/commercial/page.tsx:19-45`
- `src/app/pole-truss-enclosed-kits/page.tsx:46-63`
- `src/app/pole-truss-stand-roof-kit/page.tsx:46-63`
- `src/app/regular-style-metal-carports/page.tsx:35-52`
- `src/app/vertical-roof-style-metal-carport/page.tsx:46-63`

**Clone group 5** (25 lines, 4 instances)

- `src/app/boxed-eave-style-metal-carport/page.tsx:88-109`
- `src/app/pole-truss-enclosed-kits/page.tsx:88-109`
- `src/app/pole-truss-stand-roof-kit/page.tsx:88-109`
- `src/app/residential/%5Blocation%5D/page.tsx:176-200`

**Clone group 6** (23 lines, 3 instances)

- `src/app/commercial/page.tsx:25-47`
- `src/app/residential/%5Blocation%5D/page.tsx:60-82`
- `src/app/residential/page.tsx:33-55`

**Clone group 7** (27 lines, 3 instances)

- `src/app/commercial/page.tsx:83-109`
- `src/app/residential/%5Blocation%5D/page.tsx:146-172`
- `src/app/residential/page.tsx:122-148`

**Clone group 8** (33 lines, 3 instances)

- `src/app/commercial/page.tsx:84-116`
- `src/app/residential/%5Blocation%5D/page.tsx:151-183`
- `src/app/residential/page.tsx:123-155`

**Clone group 9** (28 lines, 3 instances)

- `src/app/metal-structures/metal-carport-kits/page.tsx:67-94`
- `src/app/roofing-color-pickers/metal-roofing/page.tsx:142-169`
- `src/app/roofing-color-pickers/shingles/page.tsx:49-76`

### Clone Families

**Family 1** (1 group, 25 lines across `src/app/about/page.tsx`, `src/app/boxed-eave-style-metal-carport/page.tsx`, `src/app/metal-structures/page.tsx`, `src/app/pole-truss-enclosed-kits/page.tsx`, `src/app/pole-truss-stand-roof-kit/page.tsx`, `src/app/regular-style-metal-carports/page.tsx`)

- Extract shared function (25 lines) from page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx (~125 lines saved)

**Family 2** (1 group, 27 lines across `src/app/boxed-eave-style-metal-carport/page.tsx`, `src/app/commercial/page.tsx`, `src/app/pole-truss-enclosed-kits/page.tsx`, `src/app/pole-truss-stand-roof-kit/page.tsx`, `src/app/regular-style-metal-carports/page.tsx`, `src/app/vertical-roof-style-metal-carport/page.tsx`)

- Extract shared function (27 lines) from page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx (~135 lines saved)

**Family 3** (1 group, 54 lines across `src/app/boxed-eave-style-metal-carport/page.tsx`, `src/app/pole-truss-enclosed-kits/page.tsx`, `src/app/pole-truss-stand-roof-kit/page.tsx`, `src/app/regular-style-metal-carports/page.tsx`, `src/app/vertical-roof-style-metal-carport/page.tsx`)

- Extract 1 shared clone group (54 lines) from page.tsx, page.tsx, page.tsx, page.tsx, page.tsx into a shared directory (~216 lines saved)

**Family 4** (1 group, 25 lines across `src/app/boxed-eave-style-metal-carport/page.tsx`, `src/app/pole-truss-enclosed-kits/page.tsx`, `src/app/pole-truss-stand-roof-kit/page.tsx`, `src/app/residential/%5Blocation%5D/page.tsx`)

- Extract shared function (25 lines) from page.tsx, page.tsx, page.tsx, page.tsx (~75 lines saved)

**Family 5** (1 group, 80 lines across `src/app/boxed-eave-style-metal-carport/page.tsx`, `src/app/pole-truss-enclosed-kits/page.tsx`, `src/app/pole-truss-stand-roof-kit/page.tsx`, `src/app/vertical-roof-style-metal-carport/page.tsx`)

- Extract 1 shared clone group (80 lines) from page.tsx, page.tsx, page.tsx, page.tsx into a shared directory (~240 lines saved)

**Family 6** (3 groups, 83 lines across `src/app/commercial/page.tsx`, `src/app/residential/%5Blocation%5D/page.tsx`, `src/app/residential/page.tsx`)

- Extract 3 shared clone groups (83 lines) from page.tsx, page.tsx, page.tsx into a shared directory (~166 lines saved)

**Family 7** (1 group, 28 lines across `src/app/metal-structures/metal-carport-kits/page.tsx`, `src/app/roofing-color-pickers/metal-roofing/page.tsx`, `src/app/roofing-color-pickers/shingles/page.tsx`)

- Extract shared function (28 lines) from page.tsx, page.tsx, page.tsx (~56 lines saved)

**Summary:** 1035 duplicated lines (28.6%) across 15 files



## DOCSTRINGS

### Docstring Coverage

- Status: fail
- Coverage: 4.23%
- Documented symbols: 3/71
- Missing docstrings: 68

