# kWh Electric · Product Package

Four documents, three folders. Everything here is markdown so it can be handed to a
designer, a model, or a person without a format conversion first.

Created 2 August 2026. Canonical project folder: `~/kwhelectric`.

---

## What is in here

| Folder | File | Audience | Length |
|---|---|---|---|
| `01-deck` | `kwh-deck.md` | Investors, partners, utility executives | 18 slides |
| `02-product` | `product-internal.md` | Internal, sales engineering, technical partners | Full reference, 16-page brochure equivalent |
| `02-product` | `product-external.md` | Utility engineers, prospects, trade shows | 2-page datasheet |
| `03-financials` | `financials.md` | Investors, internal planning | 5-year model and unit economics |

---

## Which document goes to whom

**Deck.** Sent ahead of a meeting or presented live. Narrative, not reference. It carries
the story and the ask, and it deliberately does not carry the specification table.

**Product, internal.** The complete product reference. Every protocol, every capability,
every specification field, plus the open items and unresolved figures. This is the source
document the other two are cut from. It should not leave the company unchanged, because it
contains bracketed placeholders and known contradictions.

**Product, external.** A two-sided A4 datasheet. This is the thing a utility engineer takes
away from a meeting. It is cut from the internal document with roughly 70 percent of the
copy removed.

**Financials.** The five-year model, unit economics per counterparty, market sizing, and the
revenue architecture. Derived from `kWh Electric Financial Strategy Report v3`, which is in
`~/Downloads/Partnership proposal for battery fleet.zip`.

---

## Source of truth

All product, company and technical claims come from the kWh Electric Master Knowledge
Document. All financial figures come from Financial Strategy Report v3. Where the two
disagree, the disagreement is flagged in the document rather than resolved silently.

## Before anything ships

Three things are unresolved across this package and every one of them is a number someone
will check.

1. **Hardware pricing.** Six conflicting figures across the master document and the
   financial report. Listed in full in `03-financials/financials.md`, section 8.
2. **Product naming.** "kWh Network" does not appear in the master document, which uses
   *Universal Energy Translation Platform*. Needs a decision.
3. **Round label.** The master document's checkbox defaults say pre-seed. The deck cover has
   previously said seed. $1.5M reads pre-seed.

## Related work already in this repo

- `deck/deck-v6.html` and `deck/kwh-deck-v6.pdf`, the built 18-slide deck
- `open-platform/`, the gateway experience prototype
- `exports/`, partner briefs and the P2P business model
- `CONTEXT.md`, the live project handoff document
