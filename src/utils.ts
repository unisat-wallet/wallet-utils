import bitcore from "bitcore-lib";

export function verifyMessage(publicKey: string, text: string, sig: string) {
  const message = new bitcore.Message(text);

  var signature = bitcore.crypto.Signature.fromCompact(
    Buffer.from(sig, "base64")
  );
  var hash = message.magicHash();

  // recover the public key
  var ecdsa = new bitcore.crypto.ECDSA();
  ecdsa.hashbuf = hash;
  ecdsa.sig = signature;

  const pubkeyInSig = ecdsa.toPublicKey();

  const pubkeyInSigString = new bitcore.PublicKey(
    Object.assign({}, pubkeyInSig.toObject(), { compressed: true })
  ).toString();
  if (pubkeyInSigString != publicKey) {
    return false;
  }

  return bitcore.crypto.ECDSA.verify(hash, signature, pubkeyInSig);
}
