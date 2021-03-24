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

Zap is a data seeding CLI. It supports SQL and CSV formats.

## Installation

Use NPM to install Zap CLI.

```bash
npm install -g @malvfr/zap
```

## Usage

You can display information about Zap CLI through the **"h"** flag:

```bash
zap -h
```

Given your schema file is named **schema.yml**

```bash
zap -f schema.yml
```

If you want to specify a locale, use the **"l"** flag

```bash
zap -f schema.yml -l 'pt_BR'
```

If you want to generate a CSV output, use the **"c"** flag

```bash
zap -c -f schema.yml
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
