src/core: Application Core
src/cli: Application CLI

![npm](https://img.shields.io/npm/dt/@malvfr/zap?style=plastic)
[![codecov](https://codecov.io/gh/malvfr/zap/branch/master/graph/badge.svg?token=9YKLT5WKFU)](https://codecov.io/gh/malvfr/zap)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=alert_status)](https://sonarcloud.io/dashboard?id=malvfr_zap)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=ncloc)](https://sonarcloud.io/dashboard?id=malvfr_zap)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=malvfr_zap)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=code_smells)](https://sonarcloud.io/dashboard?id=malvfr_zap)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=malvfr_zap)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=malvfr_zap&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=malvfr_zap)

# ZAP - Seed your database with realistic data

Zap is a realistic data seeding CLI, supporting CSV and SQL format. You can choose among many categories of data to create a large quantities of realistic data to populate your database.

## Installation

Use NPM to perform a global installation of Zap CLI.

```bash
npm install -g @malvfr/zap
```

## Usage

In your working directory, create a **YAML** file containing the desired database schema. After the CLI usage, the SQL or CSV files will be created at your working directory.

You can display information about Zap CLI through the **"h"** flag:

```bash
zap -h
```

Given your schema file is named **schema.yml**

```bash
zap -f schema.yml
```

If you want to specify a locale, use the **"l"** flag (See the supported locales below)

```bash
zap -f schema.yml -l 'en_US'
```

If you want to generate a CSV output, use the **"c"** flag

```bash
zap -c -f schema.yml
```

## Supported generator categories

So far, Zap CLI supports several types of generators:

- Address
- Date
- Enum (You can bring your own values to be randomly selected)
- ID
- Git
- Person
- Random
- Vehicle

## Supported locales

Zap support the locales supported by Faker.js. If a generator data is not provided in the desired language, it will fallback to **English**.

<details>
<summary>Locales</summary>

- az
- ar
- cz
- de
- de_AT
- de_CH
- en
- en_AU
- en_AU_ocker
- en_BORK
- en_CA
- en_GB
- en_IE
- en_IND
- en_US
- en_ZA
- es
- es_MX
- fa
- fi
- fr
- fr_CA
- fr_CH
- ge
- hy
- hr
- id_ID
- it
- ja
- ko
- nb_NO
- ne
- nl
- nl_BE
- pl
- pt_BR
- pt_PT
- ro
- ru
- sk
- sv
- tr
- uk
- vi
- zh_CN
- zh_TW

</details>

</br>


## Building the schema

Zap is a schema based generators, so you will need to provide a schema with your tables definitions.

To build your schema you will need to create a YAML file with the following fields:

- name :An array containing the name of the table.
- quantity: The amount of records to be generated.
- fields: Definition of the columns and their values generators.

```yml
tables:
  - name: 'YOUR_TABLE'
    quantity: 10
    fields:
      - name: 'FIELD_1_NAME'
        category:
          # pick of one of the supported categories:
          # additional options
```

## Generator options

Each category may have it's own options to produce data. Place the options in the desired \*category" object (Such as ID, Address, Person...)

### Address

Available types:

- city
- state
- country
- streetName
- streetAddress
- countryCode
- zipCode

Options:

```yml
category:
  address:
    type: state
    abbr: true | false # Abbreviates the state
```

### Date

Available types:

- weekday
- future
- between
- past
- month

Options:

```yml
category:
  date:
    type: weekday
    abbr: true | false # Abbreviates the weekday
    # ---------------------------------------------------------
    type: month
    abbr: true | false # Abbreviates the month
    # ---------------------------------------------------------
    type: past
    dateLocale: 'en-gb, pt-br, en-us...' # Outputs date in the desired format. The locale should be a Javascript compatible locale string.
    # ---------------------------------------------------------
    type: between
    start: 'YYYY-MM-DD' #the starting date in 'YYYY-MM-DD' format
    end: 'YYYY-MM-DD'   #the limit date in 'YYYY-MM-DD' format
    dateLocale: 'en-gb, pt-br, en-us...'
    # ---------------------------------------------------------
    type: future
    dateLocale: 'en-gb, pt-br, en-us...'
```

### Enum

You can bring your own data in the _values_ array to be randomly selected.

```yml
category:
  enum:
    values:
      - an array
      - containing
      - data
      - to be randomly
      - selected
```

### Git

Available types:

- branch
- commitEntry
- commitMessage
- commitSha
- shortSha

```yml
category:
  git:
    type: one of the available types
```

### ID

Available types:

- uuid
- sequentialInteger
- randomInteger

Options:

```yml
category:
  ID:
    type: sequentialInteger
    start: 20 # The starting number of the generated data. Increments 1 at each iteration.
    # ---------------------------------------------------------
    type: randomInteger
    min: 100 # The minimum number to be randomized
    max: 100 # The maximum number to be randomized
```

### Person

Available types:

- firstName
- lastName
- middleName
- jobTitle
- prefix
- suffix
- title
- jobDescriptor
- jobArea
- jobType

Options:

```yml
category:
  person:
    type: firstName
    gender: M | F # Determines the gender to be generated
    # ---------------------------------------------------------
    type: middleName
    gender: M | F
    # ---------------------------------------------------------
    type: lastName
    gender: M | F
```

### Random

Available types:

- string
- integer
- boolean
- float
- hexaDecimal
- word
- words
- image

Options:

```yml
category:
  person:
    type: string
    length: 40 # Determines the string's length to be generated
    # ---------------------------------------------------------
    type: float
    precision: 3 # The number's precision after separator.
    min: 100 # The minimum number to be randomized
    max: 100 # The maximum number to be randomized
    # ---------------------------------------------------------
    type: integer
    precision: 3 # The number's precision after separator.
    min: 100 # The minimum number to be randomized
    max: 100 # The maximum number to be randomized

```

### Random

Available types:

- vehicle
- color
- manufacturer
- model
- type
- vin
- fuel

Options:

```yml
category:
  vehicle:
    type: one of the available types
```

## Schema Example

Example of a two tables schema with two columns outputting 25 and 30 records respectively.

```yaml
tables:
  - name: 'CARS'
    quantity: 25
    fields:
      - name: 'CAR_ID'
        category:
          ID:
            type: sequentialInteger
            start: 100
      - name: 'PRICE'
        category:
          random:
            type: float
            min: 10000
            max: 20000
            precision: 4
      - name: 'MODEL'
        category:
          vehicle:
            type: vehicle
      - name: 'COLOR'
        category:
          vehicle:
            type: color
      - name: 'ACQUISITION_DATE'
        category:
          date:
            type: between
            start: '2010-03-01'
            end: '2020-05-01'
            dateLocale: 'en-gb'
  - name: 'USER'
    quantity: 30
    fields:
      - name: 'USER_ID'
        category:
          ID:
            type: uuid
      - name: 'PASSWORD'
        category:
          random:
            type: string
            length: 100
      - name: 'USER_TYPE'
        category:
          enum:
            values:
              - admin
              - regular
              - temporary
      - name: 'FIRST_NAME'
        category:
          person:
            type: firstName
            gender: F
      - name: 'LAST_NAME'
        category:
          person:
            type: lastName
      - name: 'ADDRESS'
        category:
          address:
            type: streetAddress
      - name: 'BIRTHDAY'
        category:
          date:
            type: past
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
