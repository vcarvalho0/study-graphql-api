type Envs = 'PORT' | 'DB_URL'

export const getEnv = (env: Envs) => {
  const internalEnvVar = process.env[env]
  if (typeof internalEnvVar === 'undefined') {
    throw new Error(`You must define ${env} environment varible before using it`)
  }

  return internalEnvVar
}
