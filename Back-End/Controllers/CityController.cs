using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController(){

        }
        [HttpGet("")]
        public IEnumerable<string> Getstring(){
            return new string[] {"Atlanta", "New York" };
        }
        
    }
}