export function logger(span, event, data) {
    span.log({ event: event, value: data })
    span.finish();
}

export function head(request, name) {
    let ctx = request.ctx;
    return  ctx.tracer.startSpan(name, { childOf: ctx.span });
}