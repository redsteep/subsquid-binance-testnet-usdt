from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url="https://squid.subsquid.io/binance-usdt-squid/v/v1/graphql")

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)

# Provide a GraphQL query
query = gql(
    """
    query MyQuery {
      contractEventTransfers(limit: 10, orderBy: id_DESC) {
        from
        to
        transactionHash
        value
        id
      }
    }
    """
)

# Execute the query on the transport
result = client.execute(query)
print(result)