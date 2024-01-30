import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ari = await prisma.pets.create({
    data: {
      name: '아리',
      type: 'cat',
      breed: '코숏 치즈',
      birthDate: new Date(),
      image: 'ari.png',
      memo: '아리는 뚠뚜니',
    },
  });
  const munji = await prisma.pets.create({
    data: {
      name: '먼지',
      type: 'cat',
      breed: '러시안 블루',
      birthDate: new Date(),
      image: 'munji.png',
      memo: '먼지는 너무 귀여워',
    },
  });
  console.log(ari, munji);

  const sampleVetVisit = await prisma.vetVisits.create({
    data: {
      date: new Date(),
      type: 'CHECKUP',
      clinic: '하온 동물의료센터 정자',
      description: '먼지 상태확인 및 먼지랑 아리 건강검진차 방문',
      price: 1800000,
      memo: '먼지 식이 알러지 의심 진단 받음. 스테로이드 복용 처방',
    },
  });
  console.log(sampleVetVisit);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
