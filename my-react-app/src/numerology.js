export function calculateTotals(name) {
  name = name.toUpperCase();
  let total = 0;
  let freqTotal = 0;

  const map = {
    A:1,J:1,S:1,B:2,K:2,T:2,C:3,L:3,U:3,
    D:4,M:4,V:4,E:5,N:5,W:5,F:6,O:6,X:6,
    G:7,P:7,Y:7,H:8,Q:8,Z:8,I:9,R:9
  };

  const freq = {
    A:43.31,B:10.56,C:23.13,D:17.25,E:56.88,F:9.24,G:12.59,
    H:15.31,I:38.45,J:1,K:5.61,L:27.98,M:15.36,N:33.92,
    O:36.51,P:16.14,Q:0.19,R:38.64,S:29.23,T:35.43,
    U:18.51,V:5.13,W:6.57,X:1.48,Y:9.06,Z:1.39
  };

  for (let ch of name) {
    if (map[ch]) total += map[ch];
    if (freq[ch]) freqTotal += freq[ch];
  }

  let chakra =
    freqTotal < 432 ? "Below Root Chakra" :
    freqTotal < 480 ? "Root Chakra" :
    freqTotal < 528 ? "Sacral Chakra" :
    freqTotal < 594 ? "Solar Plexus Chakra" :
    freqTotal < 672 ? "Heart Chakra" :
    freqTotal < 720 ? "Throat Chakra" :
    freqTotal < 768 ? "Third Eye Chakra" :
    "Crown Chakra";

  const meanings = {
    "12":"शिक्षित व्यक्ति, पैसा बचाने वाला",
    "19":"स्वतंत्र कार्य, अनर्जित धन",
    "37":"शीर्ष पद, वित्तीय सहयोग",
    "44":"कोई विशेष कनेक्शन नहीं"
  };

  return {
    total: total || "-",
    freq: freqTotal ? freqTotal.toFixed(2) : "-",
    chakra,
    connection: meanings[total] || "कोई विशेष कनेक्शन नहीं"
  };
}