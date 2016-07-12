/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
// system-config.ts from => https://github.com/kara/puppy-love
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material'
};
/** User packages configuration. */
var materialPackages = [
    'core',
    'toolbar',
    'icon',
    'button',
    'sidenav',
    'list',
    'card',
    'input',
    'radio',
    'checkbox',
    'progress-circle'
];
var packages = createCustomConfig(materialPackages);
function createCustomConfig(packages) {
    return packages.reduce(function (packageConfig, packageName) {
        packageConfig[("@angular2-material/" + packageName)] = {
            format: 'cjs',
            defaultExtension: 'js',
            main: packageName
        };
        return packageConfig;
    }, {});
}
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
];
var _cliSystemConfig = {};
barrels.forEach(function (barrelName) {
    _cliSystemConfig[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: _cliSystemConfig
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map