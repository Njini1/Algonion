import getAsset from '../utils/getAsset';

export function TierBox() {
  return (
    <div className="tier-box">
      <p className="tier-title">TIER</p>
      <img src={getAsset('tier/star_master.svg')} alt="tier-master" />
      <p className="tier-username">SSAFY</p>
      <p className="tier-tier">MASTER</p>
    </div>
  );
}
