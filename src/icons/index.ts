const requireContext = require.context('./svg', false, /\.svg$/)
const requireAll = (context: __WebpackModuleApi.RequireContext) => context.keys().map(context)

try {
  requireAll(requireContext)
} catch (err) {
  console.log(err)
}
