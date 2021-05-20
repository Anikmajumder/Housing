using System;
using System.Net;
using System.Threading.Tasks;
using Back_End.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Back_End.Middlewares
{
    public class ExecptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExecptionMiddleware> logger;
        private readonly IHostEnvironment env;

        public ExecptionMiddleware(RequestDelegate next, ILogger<ExecptionMiddleware> logger,
        IHostEnvironment env)
        {
            this.env = env;
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
            ApiError response;
            HttpStatusCode statusCode = HttpStatusCode.InternalServerError;
            String message;
            var exceptionType = ex.GetType();
            if(exceptionType == typeof(UnauthorizedAccessException))
            {
                statusCode = HttpStatusCode.Forbidden;
                message = "You are not authorized";
            }else{
                statusCode = HttpStatusCode.InternalServerError;
                message = "Some unknown error occured";
            }
            
            if(env.IsDevelopment()){
                response = new ApiError((int)statusCode,ex.Message,ex.StackTrace.ToString());
            }
            else{
                response = new ApiError((int)statusCode,message);
            }
            logger.LogError(ex, ex.Message);
            context.Response.StatusCode = 500;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(response.ToString());
        }
    }
}
}