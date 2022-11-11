import { ArtPieceType } from "./types/art-piece.type";

export const ArtPiece: React.FC<ArtPieceType> = ({ credit_line }) => (
  <div>
    <div className="credit_line">{credit_line}</div>
  </div>
);
