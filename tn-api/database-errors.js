// Never log raw driver errors, connection strings or query contents.
export function databaseErrorSummary(error) {
  const hints = {
    '18': 'MongoDB authentication failed. Check the Atlas database user and URI password.',
    '13': 'MongoDB denied access. Grant the database user readWrite access to the configured database.',
    '11000': 'MongoDB rejected a duplicate unique value.',
    ENOTFOUND: 'MongoDB host could not be resolved. Check the hostname in MONGODB_URI.',
    ECONNREFUSED: 'MongoDB connection refused. Check the host, port and cluster availability.',
    ETIMEDOUT: 'MongoDB connection timed out. Check Atlas network access and Render outbound IPs.',
    SELF_SIGNED_CERT_IN_CHAIN: 'The MongoDB TLS certificate chain is not trusted.',
    UNABLE_TO_VERIFY_LEAF_SIGNATURE: 'The MongoDB TLS certificate issuer could not be verified.',
    ERR_TLS_CERT_ALTNAME_INVALID: 'The MongoDB hostname does not match its TLS certificate.',
    CERT_HAS_EXPIRED: 'The MongoDB TLS certificate has expired.',
    MongoServerSelectionError: 'No MongoDB server was reachable. Check cluster availability, the URI and Atlas IP access list.',
    MongoParseError: 'MONGODB_URI or its connection options are invalid.',
    MongoNetworkError: 'The MongoDB network connection failed. Check Atlas network access.',
  }
  const code = String(error?.code ?? error?.name ?? 'UNKNOWN')
  const label = Object.hasOwn(hints, code) ? code : 'UNKNOWN'
  return `[${label}] ${hints[label] || 'Check MONGODB_URI, database permissions and connectivity.'}`
}
