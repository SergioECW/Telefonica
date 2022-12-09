namespace APIGateway_Soluciones_Agiles.Extensions
{
    public class NoEncoding_ExtensionMethod: DelegatingHandler
    {
        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage re, CancellationToken cancellationToken)
        {
            re.Headers.AcceptEncoding.Clear();
            return await base.SendAsync(re, cancellationToken);
        }
    }
}
