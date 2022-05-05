import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPluginTemplate, addAutoImportDir } from '@nuxt/kit'
import { defaultOptions, ModuleOptions } from './options';

export const moduleName = 'nuxt3-breakpoints';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: moduleName,
    configKey: 'breakpoints'
  },
  defaults: defaultOptions,
  setup (_options, nuxt) {

    const options: ModuleOptions = {
      ...defaultOptions,
      ..._options
    };

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir);

    addPluginTemplate({
      src: resolve(runtimeDir, 'templates/plugin.mjs'),
      options: {
        ...options
      }
    });

    addAutoImportDir(resolve(runtimeDir, 'composables'));
  }
})
