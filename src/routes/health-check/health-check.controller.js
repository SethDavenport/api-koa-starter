/**
 * Shallow health check: used by load balancers to see if this node is running
 * properly. Typically a load balancer will stop directing traffic to unhealthy
 * nodes automatically.
 */
export async function shallow(ctx) {
  ctx.body = { ok: 'OK' };
}

/**
 * Deep health check: if this server depends on other services, the deep health
 * check will test that we can connect to them properly as well.
 */
export async function deep(ctx) {
  ctx.body = { ok: 'OK' };
}
