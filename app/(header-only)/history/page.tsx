import HistoryCard from "@/app/components/HistoryCard";

export default function History(){
    ()=>{
        // wait for fetch data
    };
    return (
        <div className="flex flex-col items-center justify-center my-24 space-y-5">
            <HistoryCard category="พรบ." carModel="BMW, Z3, 1.9" year="2024" miles=">5000" engineNo="MR053HY9305237749" date="12 ธันวาคม 2567" status="SUCCESS"></HistoryCard>
            <HistoryCard category="พรบ." carModel="BMW, Z3, 1.9" year="2024" miles=">5000" engineNo="MR053HY9305237749" date="12 ธันวาคม 2567" status="PROCESS"></HistoryCard>
            <HistoryCard category="พรบ." carModel="BMW, Z3, 1.9" year="2024" miles=">5000" engineNo="MR053HY9305237749" date="12 ธันวาคม 2567" status="REJECT"></HistoryCard>
        </div>
    );
}