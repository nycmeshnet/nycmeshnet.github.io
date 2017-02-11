# NYC Mesh Nodes
___Generate GeoJSON from google spreadsheet___

## Setup Instructions

__Dependencies__

Install node.js, if you don't already have it.
Then, in this directory, run:
```js
npm install
```
to install dependencies

__Google Sheets API__

1. Go to the [Google Developers Console](https://console.developers.google.com/project)
2. Create a new project (and then select it)
3. Enable the Drive API for your project
  - In the sidebar on the left, expand __APIs & auth__ > __APIs__
  - Search for "drive"
  - Click on "Drive API"
  - click the blue "Enable API" button
4. Create a service account for your project
  - In the sidebar on the left, expand __APIs & auth__ > __Credentials__
  - Click blue "Add credentials" button
  - Select the "Service account" option
  - Select the "JSON" key type option
  - Click blue "Create" button
  - your JSON key file is generated and downloaded to your machine (__it is the only copy!__)
  - note your service account's email address (also available in the JSON key file)
5. Share the doc (or docs) with your service account using the email noted above
6.  Move the JSON key file to ./credentials.json (put it in the root of this project)

## Usage

```js
npm start
```
Writes a GeoJSON file to ./nodes.json

### Panoramas

The script will look for photos in the ./panoramas folder
