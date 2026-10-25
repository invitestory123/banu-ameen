# Customer Editing Guide — ghibli-selfie

Retro camera & selfie framing invitation featuring an interactive couple selfie, camera countdown, ambient shehnai/gramophone player, day schedule, venue map, and downloadable photo keepsake.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### 1. Couple Names & Title
Edit `couple` in `editable/wedding-data.js`:
- `groom`: Groom first name (e.g. `"Amaan"`)
- `bride`: Bride first name (e.g. `"Fatima"`)
- `title`: Display title on cards & photo keepsake (e.g. `"Amaan ♡ Fatima"`)

### 2. Wedding Date & Times
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Formatted date string for photo keepsake (e.g. `"12 · DECEMBER · 2026"`)
- `dateTimeLine`: Date and time below calendar buttons (e.g. `"Saturday, 12 December 2026 · 3:00 pm"`)
- `footerLine`: Footer text string

### 3. Calendar & Event Details
Edit `calendar` in `editable/wedding-data.js`:
- `title`: Calendar event subject
- `start` / `end`: UTC timestamps (`YYYYMMDDTHHMMSSZ`) for calendar invites
- `location`: Full venue address string
- `details`: Calendar event description
- `icsFilename`: Download filename for `.ics` calendar

### 4. Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name
- `address`: Venue address
- `mapsUrl`: Google Maps search/directions URL

### 5. Day Schedule / Itinerary
Edit `schedule` array in `editable/wedding-data.js`:
- Each item has `label` (e.g. `"Nikah"`) and `time` (e.g. `"3:30 pm"`).

### 6. Interactive Messages
Edit `messages` in `editable/wedding-data.js`:
- `speechBubble`: Opening speech bubble prompt
- `bouquetClick`: Toast message when bouquet is clicked
- `secretNote`: Popover message on long-press
- `secretSignoff`: Signoff line on secret note
- `thankYou`: Message on final photo section

### 7. Images
Replace files in `editable/assets/` or update paths in `images` in `wedding-data.js`:
- `couple`: Main selfie illustration (`couple.png`)
- `mosque`: Venue illustration (`mosque.png`)
- `bouquet`: Bouquet graphic (`bouquet.png`)
- `gramophone`: Gramophone music icon (`gramophone.png`)
- `cloud`: Cloud overlay (`cloud-a.png`)
- `petal` & `butterfly`: Floating particle graphics

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap image files in `editable/assets/`.
2. Do not modify production files in `assets/` unless structural changes are requested.
3. Verify syntax with `node --check editable/wedding-data.js`.
