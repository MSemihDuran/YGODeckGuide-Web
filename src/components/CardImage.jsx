import React, { useState, useEffect } from 'react';
import { getCustomCardImage } from '../data/customCardImages';

const imageCache = {};

export default function CardImage({ item, className = '', imgClassName = '' }) {
  const hasCustomUrl = Boolean(item?.imageUrl && item.imageUrl.trim() !== '');
  const customImg = !hasCustomUrl ? (getCustomCardImage(item?.name) || getCustomCardImage(item?.apiName)) : null;

  const [src, setSrc] = useState(
    hasCustomUrl
      ? item.imageUrl
      : (customImg || (item?.apiName ? imageCache[item.apiName] : null) || null)
  );
  const [loading, setLoading] = useState(!hasCustomUrl && !customImg && !src);

  useEffect(() => {
    if (item?.imageUrl && item.imageUrl.trim() !== '') {
      setSrc(item.imageUrl);
      setLoading(false);
      return;
    }

    if (customImg) {
      setSrc(customImg);
      setLoading(false);
      return;
    }

    if (item?.apiName && imageCache[item.apiName]) {
      setSrc(imageCache[item.apiName]);
      setLoading(false);
      return;
    }

    if (item?.apiName) {
      setLoading(true);
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(item.apiName)}`)
        .then(res => res.json())
        .then(data => {
          if (data.data && data.data[0]?.card_images) {
            const url = data.data[0].card_images[0].image_url;
            imageCache[item.apiName] = url;
            setSrc(url);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [item?.imageUrl, item?.apiName, item?.name, customImg]);

  const displaySrc = src || customImg || 'https://via.placeholder.com/300x430/1e293b/818cf8?text=Kart';

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 z-10">
          <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={displaySrc}
        alt={item?.name || 'Yu-Gi-Oh Kart'}
        loading="lazy"
        className={`w-full h-full object-contain transition-transform duration-200 ${imgClassName}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x430/1e293b/818cf8?text=Kart';
        }}
      />
    </div>
  );
}
