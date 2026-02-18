export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-03'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// Add these debug lines
console.log('Environment check:', {
  projectId,
  dataset,
  apiVersion,
  allEnvVars: Object.keys(process.env).filter(k => k.includes('SANITY'))
});