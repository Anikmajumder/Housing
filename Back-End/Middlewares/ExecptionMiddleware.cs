using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Back_End.Middlewares
{
    public class ExecptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExecptionMiddleware> logger;
        public ExecptionMiddleware(RequestDelegate next, ILogger<ExecptionMiddleware> logger)
        {
            this.logger = logger;
            this.next = next;


        }
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, ex.Message);
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync(ex.Message);
            }
        }
    }
}